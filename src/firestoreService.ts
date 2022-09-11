export class FirestoreService {
  private firestore: any;
  constructor(email: string, key: string, projectId: string) {
    const replaceKey = key.replace(/REPLACE-LF-REPLACE/g, '\n');
    console.log(replaceKey);
    // @ts-ignore because of Add GoogleScripts Library
    this.firestore = FirestoreApp.getFirestore(email, replaceKey, projectId);
  }
  updateData(collectionId: string, documentId: string, data) {
    this.firestore.updateDocument(collectionId + '/' + documentId, data, true);
  }
}
