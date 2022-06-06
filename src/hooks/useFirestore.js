import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    // create reference
    console.log(projectStorage)
    const storageRef = ref(projectStorage, file.name)
    console.log(storageRef)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url))
      }
    )
  }, [file])

  return { docs }
}

export default useFirestore
