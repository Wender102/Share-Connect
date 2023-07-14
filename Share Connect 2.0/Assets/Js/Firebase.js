const firebaseConfig = {
    apiKey: "AIzaSyBteb6zjaUpLgYfA3Tg1goO819GHktm864",
    authDomain: "share-connect-b8373.firebaseapp.com",
    projectId: "share-connect-b8373",
    storageBucket: "share-connect-b8373.appspot.com",
    messagingSenderId: "152145985849",
    appId: "1:152145985849:web:892fbeab6f0571545228e8"
}

firebase.initializeApp(firebaseConfig)

//? My code
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()
const storage = firebase.storage()

let emailUser = undefined

//# vai criar a conta do user
function fazerLogin() {
    return new Promise((resolve, reject) => {
        auth.signInWithPopup(provider).then((result) => {
            auth.onAuthStateChanged((val) => {
                if(val.email) {
                    emailUser = val.email
                    let imgPerfilUser = document.getElementById('imgPerfilUser')
                    imgPerfilUser.src = val.photoURL
                    imgPerfilUser.style.display = 'block'
                    document.getElementById('spanIconUser').style.display = 'none'

                    resolve()
                } else {
                    reject()
                }
            })
        })
    })
}

//# vai tentar logar na conta do user caso já tenha uma
function logarNaConta() {
    auth.onAuthStateChanged((val) => {
        if(val.email) {
            emailUser = val.email
            let imgPerfilUser = document.getElementById('imgPerfilUser')
            imgPerfilUser.src = val.photoURL
            imgPerfilUser.style.display = 'block'
            document.getElementById('spanIconUser').style.display = 'none'
        }
    })
} logarNaConta()