import React, { useState } from 'react';
import Header from './Header';
import './index.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContent, editedContent } from '../Componenets/contentSlice';

const ReadPage = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const sid = searchParams.get('n');
  console.log(sid);
  const content = useSelector(store => store.content);
  const [currentContent, setCurrentContent] = useState(() => {
    const initialContent = content.find(cont => cont.id === sid);
    return { title: initialContent?.title, passage: initialContent?.passage };
  });

  console.log(content);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    dispatch(editedContent({ id: sid, title: currentContent.title, passage: currentContent.passage }));
    setEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteContent(sid));
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentContent(prevContent => ({
      ...prevContent,
      [name]: value
    }));
  };

  return (
    <div>
      <Header />
      {content.filter(cont => cont.id === sid).map(cont => (
        <div key={cont.id} className="read">
          {edit ? (
               <>
              <button onClick={handleSave}>Save</button>
           
              <input
                type="text"
                name="title"
                value={currentContent.title}
                onChange={handleChange}
              />
              <textarea
                name="passage"
                value={currentContent.passage}
                onChange={handleChange}
              /></>
            
          ) : (
            <>
              <h3>{cont.title}</h3>
              <p>{cont.passage}</p>
              <div><button onClick={handleDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReadPage;
