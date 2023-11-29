import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ReporterImg from 'assets/images/reporter/Reporter-1.png';
import { BackButton } from 'components/common/profile/BackButton';
import { Section } from 'components/common/profile/Section';
import { Button, MinorButton } from 'ui/components/Button';

import s from './Chat.module.scss';
import { UserAvatar } from 'components/common/UserAvatar';
import { FlagIcon } from 'components/icons/FlagIcon';
import { ScrollBlock } from 'components/common/ScrollBlock';
import { IMessage } from 'types/chatTypes';
import { SendMessageForm } from './SendMessageForm';

const data = {
  user: {
    id: '1',
    userName: 'Nareerat Sakuna',
    email: 'smallpaul@me.com',
    avatarURL: ReporterImg.src,
  },
};

const messages: IMessage[] = [
  {
    id: '1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    sender: {
      userName: 'Nareerat Sakuna',
      email: '',
      avatarURL: ReporterImg.src,
      createdAt: '4 Sep 2023  14:30',
    },
    seenBy: [],
    updatedAt: '14:30',
    createdAt: '14:30',
  },
  {
    id: '2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    sender: {
      userName: 'Nareerat Sakuna',
      email: '',
      avatarURL: ReporterImg.src,
      createdAt: '4 Sep 2023  14:30',
    },
    seenBy: [],
    updatedAt: '15:30',
    createdAt: '15:30',
  },
];

export const Chat: FC = () => {
  const t = useTranslations('ProfilePage.Report.Chat');

  return (
    <Section>
      <Section.Header className={s.header}>
        <div className={s.header_control}>
          <BackButton />
          <h3>{data.user.userName}</h3>
        </div>
        <MinorButton className={s.close_btn}>{t('close_btn')}</MinorButton>
      </Section.Header>
      <Section.Body>
        <div className={s.chat}>
          <div className={s.chat_header}>
            <div className={s.user}>
              <UserAvatar
                avatarURL={data.user.avatarURL}
                userName={data.user.userName}
                size={56}
              />
              <div className={s.user_info}>
                <div className={s.user_name}>{data.user.userName}</div>
                <div className={s.user_status}>{t('online')}</div>
              </div>
            </div>
            <Button className={s.flag_btn}>
              <FlagIcon />
            </Button>
          </div>
          <ScrollBlock.Body height={420} wrapperClassName={s.chat_content}>
            {messages.map((message, i) => {
              if (i % 2 === 0) {
                return (
                  <div className={`${s.row} ${s.row_left}`}>
                    <div className={`${s.message} ${s.message_left}`}>
                      <div className={s.text}>{message.content}</div>
                      <div className={s.time}>{message.createdAt}</div>
                    </div>
                  </div>
                );
              }
              return (
                <div className={`${s.row} ${s.row_right}`}>
                  <div className={`${s.message} ${s.message_right}`}>
                    <div className={s.text}>{message.content}</div>
                    <div className={s.time}>{message.createdAt}</div>
                  </div>
                </div>
              );
            })}
          </ScrollBlock.Body>
          <SendMessageForm />
        </div>
      </Section.Body>
    </Section>
  );
};
