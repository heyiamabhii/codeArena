import CodeMirror from '@uiw/react-codemirror';
import { cppLanguage } from '@codemirror/lang-cpp';
import { dracula } from '@uiw/codemirror-theme-dracula';
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';

function MainEditor({ socketRef, roomId, user, val, isReady }) {

  console.log(val)

  const [writeCodeValue,setWriteCodeValue] = useState(val)


  useEffect(()=>{
    if(val){
      setWriteCodeValue(val)
    }
  },[])

  const handleChange = (e) => {
    socketRef.current.emit('codechange', {
      user,
      roomId,
      e
    });
    localStorage.setItem('code', e);
  };

  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('code');
  });

  return (
    <div className="h-full">
      {!isReady && (
        <div className="text-red-500/70 mt-2">
          You can't write code until everyone is ready :) 
        </div>
      )}
      <CodeMirror
        id="codeEdit"
        value={writeCodeValue}
        height="100%"
        className={`h-full text-base border border-[#685a96] rounded-lg ${!isReady ? 'opacity-50' : ''}`}
        theme={dracula}
        extensions={[cppLanguage]}
        onChange={isReady ? handleChange : null} // Only allow changes if ready
        editable={isReady} // Disable editing if not ready
      />
    </div>
  );
}

MainEditor.propTypes = {
  socketRef: PropTypes.object.isRequired,
  roomId: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  isReady: PropTypes.bool.isRequired,
};

export default MainEditor;
