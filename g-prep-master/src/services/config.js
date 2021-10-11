export const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('eduhub-user')).token
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export const getMultiPartAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('eduhub-user')).token
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  }
}

export const getS3Credintials = () => ({
  accessKeyId: 'AKIARQSE4VJZ7XUNY75B',
  secretAccessKey: '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'
})
