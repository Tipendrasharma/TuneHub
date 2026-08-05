const ImageKit = require('@imagekit/nodejs');

const ImageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function uploadFile(file) {
  const result = await ImageKitClient.files.upload({
    file,
    fileName: "music_" + Date.now(), // You can customize the file name as needed
    folder: 'spotify/music', // Optional: Specify a folder in ImageKit
  });
  return result;
}

module.exports = {
  uploadFile,
};