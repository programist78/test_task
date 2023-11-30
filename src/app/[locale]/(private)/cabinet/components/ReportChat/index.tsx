'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useMutation } from '@apollo/client';
// import { SEND_MESSAGE } from 'apollo/mutations/chat';

import { IProduct } from 'types/shopTypes';
import { messageShema, reportMessageShema } from 'utils/schemes/auth-schema';

import { MinorButton } from 'ui/components/Button';
import { UserAvatar } from 'components/common/UserAvatar';
import { ReportModal } from 'components/modals/ReportModal';
import { FlagIcon } from 'components/icons/FlagIcon';
import { SendIcon } from 'components/icons/SendIcon';
import { ScrollBlock } from 'components/common/ScrollBlock';
import { Loader } from 'components/common/loader';
import { ErrorMessage } from 'components/common/messages/Messages';

import s from './ReportChat.module.scss';
import { ChatMessage } from '../ChatMessage';

interface IMessage {
  createdAt: string;
  content: string;
  isReply: boolean;
}

export interface IReportUser {
  avatarURL: string;
  userName: string;
  isOnline: boolean;
  email: string;
}

interface ReportChatProps {
  user: IReportUser;
  secondary?: boolean;
  chatHeight?: number;
}

export const ReportChat: FC<ReportChatProps> = ({
  user,
  secondary = false,
  chatHeight = 402,
}) => {
  const t = useTranslations('ProductPage.Chat');
  const { locale } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleCloseModal = () => setModalOpen(false);
  const handleToggleModal = () => setModalOpen(!modalOpen);

  const { register, handleSubmit, reset } = useForm<IMessage>({
    resolver: yupResolver(reportMessageShema),
  });

  // const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE);

  const handleMessageSubmit = ({ content }: IMessage) => {
    //   sendMessage({
    //     variables: {
    //       input: {
    //         message: message,
    //         recipientId: '653fe9bdd9ca7d9b71b933b1',
    //       },
    //     },
    //     onCompleted(data: ISendMessageResponse) {
    //       console.log(data.sendMessage.sender);
    //       reset();
    //     },
    //     onError(err) {
    //       console.error(err);
    //     },
    //   });
  };

  return (
    <ScrollBlock className={[s.chat, secondary ? s.secondary : ''].join(' ')}>
      <ScrollBlock.Top className={s.seller}>
        <div className={s.seller_block}>
          <div className={s.seller_image}>
            <UserAvatar avatarURL={user.avatarURL} userName={user.userName} />
          </div>
          <div className={s.seller_info}>
            <h4>{user.userName ?? 'Need Seller Name'}</h4>
            {user.isOnline && (
              <span className={s.seller_status_online}>Online</span>
            )}
            {!user.isOnline && (
              <span className={s.seller_status_offline}>Offline</span>
            )}
          </div>
        </div>
        <button className={s.seller_report} onClick={handleToggleModal}>
          <FlagIcon />
        </button>
      </ScrollBlock.Top>
      <ScrollBlock.Body
        height={chatHeight}
        wrapperClassName={s.chat_wrapper}
        className={s.chat_body}
      >
        {messages?.map((message, index) => {
          return (
            <ChatMessage
              createdAt={message.createdAt}
              content={message.content}
              isReply={message.isReply}
              key={message.createdAt + index}
            />
          );
        })}
        <div className={s.chat_messages}></div>
      </ScrollBlock.Body>
      <ScrollBlock.Footer className={s.chat_footer}>
        <form
          className={s.chat_form}
          onSubmit={handleSubmit(handleMessageSubmit)}
        >
          <div className={s.chat_input}>
            <input
              {...register('content', {
                required: true,
              })}
              type="text"
              placeholder={t('write_message')}
            />
          </div>
          <MinorButton className={s.chat_send} type="submit">
            {t('send')}
            <SendIcon />
          </MinorButton>
        </form>
      </ScrollBlock.Footer>
      <ReportModal
        isOpen={modalOpen}
        onCloseModal={handleCloseModal}
        avatarURL={user.avatarURL}
        userName={user.userName}
        email={user.email}
      />
      {/* {error && <ErrorMessage text={error.message} />}
      {loading && <Loader />} */}
    </ScrollBlock>
  );
};
