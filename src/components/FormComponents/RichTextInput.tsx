import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface RichTextInputProps {
    className: string;
    inputRef: any;
}

const RichTextInput: React.FC<RichTextInputProps> = ({ className, inputRef }) => {

    return (
        <div className={className}>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: [
                        'heading', '|', 'bold', 'italic', 'blockQuote', 'numberedList',
                        'bulletedList', 'imageUpload', 'insertTable', 'tableColumn',
                        'tableRow', 'mergeTableCells', '|', 'undo', 'redo'
                    ]
                }}
                onReady={(editor) => {
                    inputRef.current = editor;
                }}
            />
        </div>
    );
};

export default RichTextInput