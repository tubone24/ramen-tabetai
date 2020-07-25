export class GetScriptPropertiesService {
  static getProperties(): Property {
    const lineBearer: string = PropertiesService.getScriptProperties().getProperty('LINE_BEARER');
    const grunaviToken: string = PropertiesService.getScriptProperties().getProperty(
      'GRUNAVI_TOKEN'
    );
    const hotpepperToken: string = PropertiesService.getScriptProperties().getProperty('HOTPEPPER_TOKEN');
    return {
      lineBearer: lineBearer,
      grunaviToken: grunaviToken,
      hotpepperToken: hotpepperToken,
    };
  }
}

export interface Property {
  lineBearer: string;
  grunaviToken: string;
  hotpepperToken: string;
}
