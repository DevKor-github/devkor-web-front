import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

function BlogEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  return (
    <Wrapper>
      <input type="text" placeholder="제목을 입력해주세요" />
      <Editor
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={
          {
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            // list: { inDropdown: true },
            // textAlign: { inDropdown: true },
            // link: { inDropdown: true },
            // history: { inDropdown: false },
          }
        }
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: "ko",
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />

      <p className="tag">미리보기</p>
      <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} />

      <button type="submit">글 작성</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1rem;

  input {
    display: block;
    width: 50%;
    margin: 0 auto;
    font-size: 24px;
    padding: 2rem 0 2rem 1rem;
    border: none;
  }
  .tag {
    display: block;
    width: 50%;
    margin: 0 auto;
    font-size: 24px;
    padding: 2rem 0;

    font-family: NanumSquare;
  }
  button {
    display: block;
    width: 25%;
    margin: 0 auto;
    font-size: 24px;
    padding: 1rem 0;

    border: none;
    border-radius: 1rem;
    color: white;
    background-color: #007fff;
    font-family: NanumSquare;

    &:hover {
      background-color: #0073cf;
    }
  }
  .wrapper-class {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .editor {
    min-height: 300px !important;
    max-height: 500px;
    border: 1px solid #f1f1f1 !important;
    padding: 1rem !important;
    border-radius: 2px !important;
  }
`;

const IntroduceContent = styled.div`
  /* position: relative; */
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: scroll;
  padding: 1.5rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
  max-height: 500px;
  line-height: 2rem;
`;

export default BlogEditor;
