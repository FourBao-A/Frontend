import AWS from 'aws-sdk';

export function uploadS3(file) {
  return new Promise((resolve, reject) => {
    const REGION = process.env.REACT_APP_REGION;
    const ACCESS_KEY_ID = process.env.REACT_APP_S3_ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY_ID = process.env.REACT_APP_S3_SECRET_ACCESS_KEY_ID;

    
  
    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY_ID,
    });

    const s3 = new AWS.S3();
    const params = {
      ACL:'public-read',
      Bucket: 'bookbao.image', // 버킷 이름
      Key: `${file.name}`, // 파일 경로와 이름
      Body: file,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error uploading file:', err);
        reject(err);
      } else {
        console.log('Successfully uploaded file.', data);
        resolve(data.Location); // 업로드된 파일의 URL 반환
      }
    });
  });
}

//Promise 객체는 동기처리, Promise자체의 반환값은 무조건 resolve와 reeject에 집중
//resolve(res) 여기서 '.then((res)=>res.data)' 이렇게 인자처리
//env가 undefined => 경로설정 확인
//ACL설정 => 버킷 -> 권한 -> 객체소유권 탭에서 ACL 활성화/비활성화 체크 (비활성화시 params에서 ACL설정하면 안 됨)