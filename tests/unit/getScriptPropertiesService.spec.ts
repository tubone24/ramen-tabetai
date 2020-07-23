import { GetScriptPropertiesService } from "../../src/getScriptPropertiesService";

describe('getProperties', () => {
  it('ok', () => {
    const mockGetProperty = jest.fn();
    mockGetProperty.mockReturnValueOnce('test_line_bearer');
    mockGetProperty.mockReturnValueOnce('test_grunavi_token');

    const mockGetScriptProperties = jest.fn(() => {
      return {
        getProperty: mockGetProperty
      };
    });
    // @ts-ignore
    PropertiesService.getScriptProperties = mockGetScriptProperties;
    const expected = {
      lineBearer: 'test_line_bearer',
      grunaviToken: 'test_grunavi_token',
    };

    const actual = GetScriptPropertiesService.getProperties();
    expect(actual).toEqual(expected)
  });
});
