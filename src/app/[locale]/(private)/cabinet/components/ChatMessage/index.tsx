import { FC } from 'react';

import s from './ChatMessage.module.scss';

interface ChatMessageProps {
  isReply: boolean;
  content: string;
  createdAt: string;
  className?: string;
}

export const ChatMessage: FC<ChatMessageProps> = ({
  isReply,
  content,
  createdAt,
  className,
}) => {
  return (
    <div
      className={`${s.message} ${isReply ? s.reply : s.response} ${
        className ? className : ''
      } `.trim()}
    >
      <div className={`${isReply ? s.right : s.left}`.trim()}>{content}</div>
      <div className={`${s.message_time} ${isReply ? s.left : s.right}`.trim()}>
        {createdAt}
      </div>
    </div>
  );
};
