function checkLogined(){
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('JSESSIONID=')) {
        return true;
      }
    }
    return false;
}

export default checkLogined;