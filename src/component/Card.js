import { ChatBubbleOutlineOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import Emoji from './Emoji';
import { useId } from 'react';
export default () => {
  return (
    
    <div className="card">
      <img src={
        "https://picsum.photos/200/300?" + Math.floor(Math.random() * Math.floor(555))
      } alt="" />
      <div className="card-content">
        <div className="card-title">
          Most modern mobile touch slider and framework with hardware accelerated 1
        </div>
        <div className="card-bt">

          <div className="card-fa lik">
            <ThumbUpAltOutlined />
            <span className='lik' style={{ marginLeft: '4px' }}> like</span>
            <Emoji />
          </div>
          <div className="card-fa ">
            <ChatBubbleOutlineOutlined />
            <span className='comm' style={{ marginLeft: '4px' }}> comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
