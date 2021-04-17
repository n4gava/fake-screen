import "./windows.alert.scss";
import AlertIcon from "./images/windows-10-alert.png";

interface WindowsAlertProps {}

export default function WindowsAlert(props: WindowsAlertProps) {
    const className = "windows-alert";

    return (
        <div className={className}>
            <div className={className + "__title"}>
                <img src={AlertIcon} />
                <p>Microsoft Windows</p>
                <div className={className + "__title__close"}>X</div>
            </div>
            <div className={className + "__icon"}></div>
            <div className={className + "__body"}>
                <div className={className + "__body__title"}>Your computer is low on memory</div>
                <div className={className + "__body__body"}>
                    To restore enough memory for programs to work correctly, save your files and then close or restart
                    all open programs.
                </div>
            </div>
            <div className={className + "__buttons-area"}>
                <button>OK</button>
            </div>
        </div>
    );
}
