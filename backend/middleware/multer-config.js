const multer = require ('multer'); 

const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}

const storage = multer.diskStorage( {
    // fonction destination qui va indiquer à multer dans quel dossier enregistrer les fichiers
    destination:(req, file, callback) => {
        callback(null, 'images')
    },
    // fillname explique à multer quel nom de fichiers utiliser 
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join['_']; //le but étant de récupérer le nom original du fichier et de supprimer tout type d'espace grâce '_'
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension) //on ajoute un Timestamp comme nom de fichier
    }
});

module.exports = multer({ storage: storage }).single('image');
