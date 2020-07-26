export class FirestoreService {
  private firestore: any;
  constructor(email: string, key: string, projectId: string) {
    console.log(key)
    // @ts-ignore because of Add GoogleScripts Library
    this.firestore = FirestoreApp.getFirestore(email, key, projectId);
  }
  updateData(collectionId: string, documentId: string, data) {
    this.firestore.updateDocument(collectionId + '/' + documentId, data, true);
  }
}
