
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, limit} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCvtvx7X8RiAjSr31MERqRX2le3K4gh5Bs",
  authDomain: "santalupemantas.firebaseapp.com",
  projectId: "santalupemantas",
  storageBucket: "santalupemantas.appspot.com",
  messagingSenderId: "1035564412047",
  appId: "1:1035564412047:web:a5f908ebc14d2e327794fa"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

//1//Traer todos los docs
export default async function getItems(){
    const collectionProductsRef = collection(DB, "products");
    const documentSnapshot = await getDocs(collectionProductsRef);
    const documentsData = documentSnapshot.docs.map ( doc => {
        return {
          ...doc.data(),
          id: doc.id,
    }
    });
  return documentsData;
}

export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(10));
  const documentSnapshot = await getDocs(q);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

//2// Traer doc por ID
export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

//3// Traer todos los docs segun category
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");
  const queryCat = query(collectionRef, where("category", "==", categoryParams ))
  const documentSnapshot = await getDocs(queryCat);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

//4// Enviar la orden a Firebase
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

async function exportArrayToFirestore() {
  const products = [
    {
      id: 1,
      title: "Manta AZUL",
      price: 5000,
      category: "promociones",
      imgurl: "/imgs/manta1.wepb",
      stock: 8,
      description: "Manta azul- 100cm x 120cm",
    },
    {
      id: 2,
      title: "Manta MAGENTA",
      price: 5000,
      category: "promociones",
      imgurl: "/imgs/manta1.webp",
      stock: 11,
      description: "Manta magenta - 100cm x 120cm",
    },
    {
      id: 3,
      title: "Manta GREY",
      price: 7100,
      category: "nuevosingresos",
      imgurl: "/imgs/manta3.png",
      stock: 12,
      description: "Manta gris - 100cm x 120cm",
    },
    {
      id: 4,
      title: "Manta BONE",
      price: 7000,
      category: "nuevosingresos",
      imgurl: "/imgs/manta4.png",
      stock: 14,
      description: "Manta hueso - 100cm x 120cm",
    },
    {
      id: 5,
      title: "Manta BEIGE",
      price: 7000,
      category: "nuevosingresos",
      imgurl: "/imgs/manta5.png",
      stock:15,
      description: "Manta beige - 100cm x 120cm",
    },
];

const collectionRef = collection(DB, "products");
  for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento creado, id:", docOrder.id);
  }
}