// file is used as a reference not going to be apart of the code

let db = {
  users: [
    {
      userId: 'asdf123af16eaf13ad1f5',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/dadvbeafasv/abecvad',
      website: 'https://user.com',
      location: 'California, US'
    }
  ],

  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2019-08-03T23:13:22.182Z',
      likeCount: 5,
      commentCount: 2
    }
  ],

  comments: [
    {
      body: 'Nice scream!!!',
      createdAt: '2019-08-18T00:45:10.483Z',
      screamId: 'gEoFylxEMMXXQrLU3IrU',
      userHandle: 'uni'
    }
  ],

  notifications: [
    {
      createdAt: '2019-08-18T00:45:22.812Z',
      read: false,
      recipient: 'new2',
      sceramId: 'gEoFylxEMMXXQrLU3IrU',
      sender: 'uni',
      type: 'comment'
    }
  ]
};
