export class FirestoreService {
  private firestore: any;
  constructor(email: string, key: string, projectId: string) {
    // @ts-ignore because of Add GoogleScripts Library
    console.log(key)
    this.firestore = FirestoreApp.getFirestore(email, key, projectId);
  }
  updateData(collectionId: string, documentId: string, data) {
    this.firestore.updateDocument(collectionId + '/' + documentId, data, true);
  }
}
