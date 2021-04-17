/**
 * Função assincronona para fazer o sleep
 * @param milliseconds milliseconds
 */
async function sleep(milliseconds: number) {
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Coloca a tela em fullscreen
 */
function fullscreen(): void {
    const elem = document.documentElement as any;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

/**
 * Retorna uma imagem da area de tranferencia
 */
function getClipboardImage(DataTransfer: DataTransfer, onImageLoaded: (image: string) => void): void {
    const firstItem = DataTransfer.items[0];
    const isImage = firstItem.type.indexOf("image") === 0;

    if (!isImage) return;

    var blob = firstItem.getAsFile();

    if (!blob) return;

    var reader = new FileReader();

    reader.onload = function (event: ProgressEvent<FileReader>) {
        const target = event.target as FileReader;
        if (target.result) {
            onImageLoaded(target.result as string);
        }
    };

    reader.readAsDataURL(blob);
}

export { sleep, fullscreen, getClipboardImage };
