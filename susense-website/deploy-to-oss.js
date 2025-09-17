#!/usr/bin/env node

/**
 * OSS 部署脚本
 * 使用方法: node deploy-to-oss.js
 */

const fs = require('fs');
const path = require('path');

// 检查是否安装了 OSS SDK
let OSS;
try {
  OSS = require('ali-oss');
} catch (error) {
  console.error('❌ 请先安装 ali-oss SDK:');
  console.error('npm install ali-oss');
  process.exit(1);
}

// OSS 配置 - 请根据您的实际情况修改
const ossConfig = {
  region: 'oss-cn-hangzhou', // 您的 OSS 区域
  accessKeyId: process.env.OSS_ACCESS_KEY_ID, // 从环境变量获取
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET, // 从环境变量获取
  bucket: process.env.OSS_BUCKET_NAME, // 从环境变量获取
};

// 上传配置
const uploadConfig = {
  localDir: './out', // 静态文件目录
  remoteDir: '', // OSS 中的目录，留空表示根目录
  exclude: ['.DS_Store', 'Thumbs.db'], // 排除的文件
};

// 创建 OSS 客户端
const client = new OSS(ossConfig);

// 递归获取所有文件
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      // 检查是否在排除列表中
      if (!uploadConfig.exclude.includes(file)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// 上传单个文件
async function uploadFile(localPath, remotePath) {
  try {
    const result = await client.put(remotePath, localPath);
    console.log(`✅ ${localPath} -> ${result.url}`);
    return result;
  } catch (error) {
    console.error(`❌ 上传失败 ${localPath}:`, error.message);
    throw error;
  }
}

// 主上传函数
async function uploadToOSS() {
  try {
    console.log('🚀 开始上传到 OSS...');
    
    // 检查配置
    if (!ossConfig.accessKeyId || !ossConfig.accessKeySecret || !ossConfig.bucket) {
      console.error('❌ 请设置环境变量:');
      console.error('export OSS_ACCESS_KEY_ID=your_access_key_id');
      console.error('export OSS_ACCESS_KEY_SECRET=your_access_key_secret');
      console.error('export OSS_BUCKET_NAME=your_bucket_name');
      process.exit(1);
    }
    
    // 检查静态文件目录
    if (!fs.existsSync(uploadConfig.localDir)) {
      console.error(`❌ 静态文件目录不存在: ${uploadConfig.localDir}`);
      console.error('请先运行: npm run build');
      process.exit(1);
    }
    
    // 获取所有文件
    const files = getAllFiles(uploadConfig.localDir);
    console.log(`📁 找到 ${files.length} 个文件待上传`);
    
    // 上传所有文件
    const results = [];
    for (const file of files) {
      // 计算远程路径
      const relativePath = path.relative(uploadConfig.localDir, file);
      const remotePath = path.join(uploadConfig.remoteDir, relativePath).replace(/\\/g, '/');
      
      const result = await uploadFile(file, remotePath);
      results.push(result);
    }
    
    console.log(`\n🎉 上传完成! 共上传 ${results.length} 个文件`);
    
    // 显示访问地址
    const indexResult = results.find(r => r.name.endsWith('index.html'));
    if (indexResult) {
      const baseUrl = `https://${ossConfig.bucket}.${ossConfig.region}.aliyuncs.com`;
      console.log(`🌐 网站访问地址: ${baseUrl}/`);
    }
    
  } catch (error) {
    console.error('❌ 上传失败:', error.message);
    process.exit(1);
  }
}

// 运行上传
if (require.main === module) {
  uploadToOSS();
}

module.exports = { uploadToOSS };
