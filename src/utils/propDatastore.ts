class PropDatastore {
  saveDatastore(props: any) {
    localStorage.setItem(window.location.pathname, JSON.stringify(props));
  }

  getDatastore() {
    const temp = localStorage.getItem(window.location.pathname);

    if (!temp) return null;
    return JSON.parse(temp);
  }
}

export const propDatastore = new PropDatastore();
