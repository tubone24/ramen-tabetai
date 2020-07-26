export class GetScriptPropertiesService {
  static getProperties(): Property {
    const lineBearer: string = PropertiesService.getScriptProperties().getProperty('LINE_BEARER');
    const grunaviToken: string = PropertiesService.getScriptProperties().getProperty(
      'GRUNAVI_TOKEN'
    );
    const hotpepperToken: string = PropertiesService.getScriptProperties().getProperty(
      'HOTPEPPER_TOKEN'
    );
    const fireStoreEmail: string = PropertiesService.getScriptProperties().getProperty(
      'FIRESTORE_EMAIL'
    );
    const fireStoreKey: string = PropertiesService.getScriptProperties().getProperty(
      'FIRESTORE_KEY'
    );
    const fireStoreProjectId: string = PropertiesService.getScriptProperties().getProperty(
      'FIRESTORE_PROJECT_ID'
    )
    return {
      lineBearer: lineBearer,
      grunaviToken: grunaviToken,
      hotpepperToken: hotpepperToken,
      fireStoreEmail: fireStoreEmail,
      fireStoreKey: fireStoreKey,
      fireStoreProjectId: fireStoreProjectId,
    };
  }
}

export interface Property {
  lineBearer: string;
  grunaviToken: string;
  hotpepperToken: string;
  fireStoreEmail: string;
  fireStoreKey: string;
  fireStoreProjectId: string;
}
