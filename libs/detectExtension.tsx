const detectExtension = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let img = new Image();
    const chromeExtensionId = process.env
      .NEXT_PUBLIC_CHROME_EXTENSION_ID as string;
    img.src = `chrome-extension://${chromeExtensionId}/images/icon16.png`;
    img.onload = function () {
      resolve(true);
    };
    img.onerror = function () {
      resolve(false);
    };
  });
};

export default detectExtension;
