export const saveCookie = (nameCookie: string, val: string) => {
  document.cookie = `${nameCookie}=${val}; max-age=${
    60 * 60 * 24
  }; path=/; samesite=stric`;
};

export const getCookie = (name: string): { token: string } => {
  var token;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    token = parts.pop()?.split(";").shift();
  }

  if (token) {
    return {
      token,
    };
  }
  
  return {
    token: "",
  };
};
