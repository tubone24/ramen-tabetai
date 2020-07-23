export class GetScriptPropertiesService {
  static getProperties(): Property {
    const lineBearer: string = PropertiesService.getScriptProperties().getProperty('LINE_BEARER');
    const grunaviToken: string = PropertiesService.getScriptProperties().getProperty(
      'GRUNAVI_TOKEN'
    );
    return {
      lineBearer: lineBearer,
      grunaviToken: grunaviToken
    };
  }
}

export interface Property {
  lineBearer: string;
  grunaviToken: string;
}
