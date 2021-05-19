import { firestore } from './../../firebase/utils'

export const handleAddProduct = product => {

    return new Promise((resolve, reject) => {
        // Add product to firestore database collection 'products'
        firestore
            .collection('products')
            .doc()
            .set(product)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleDeleteProduct = productID => {
    
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(productID)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchProducts = ({ filterType, filterAlcohol, popular }) => {
    return new Promise((resolve, reject) => {
        // Save a reference of our firestore collection 'products' and order by value 'createdDate'
        let ref = firestore
                    .collection('products')
                    .orderBy('createdDate');

        if (filterType) ref = ref.where('productCategory', '==', filterType);
        if (filterAlcohol) ref = ref.where('alcohol', '==', filterAlcohol);
        if (popular) ref = ref.where('popular', '==', true);
        
        

        // Take snapshot of database, iterate over results and return data and id of document and save as variable productsArray
        ref
            .get()
            .then(snapshot => {
                const productsArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
                resolve(productsArray);
            })
            .catch(err => {
                reject(err)
            })
    })
}


export const handleFetchProduct = productID => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc(productID)
        .get()
        .then(snapshot => {
          if (snapshot.exists) {
            resolve({
                ...snapshot.data(),
                documentID: snapshot.id
            }
              
            );
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }