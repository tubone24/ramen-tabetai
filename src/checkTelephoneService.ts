export const checkTelephoneNumber = (tel: string): boolean => {
  const telnum = tel.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');
  return !!tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/);
}
