import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";

interface RichTextInputProps {
    className: string;
    inputRef: React.Ref<HTMLTextAreaElement>;
}

const RichTextInput: React.FC<RichTextInputProps> = ({ }) => {
    const [editorData, setEditorData] = useState<string>('');

    const handleEditorChange = (_event: any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
    };

    return (
        <div>
            <label>
                <CKEditor
                    editor={ClassicEditor}
                    data={editorData}
                    onChange={handleEditorChange}
                />
            </label>
        </div>
    );
};

export default RichTextInput

