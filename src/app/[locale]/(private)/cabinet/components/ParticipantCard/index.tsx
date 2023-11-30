import { FC } from 'react';
import { StaticImageData } from 'next/image';

import s from './ParticipantCard.module.scss';
import { UserAvatarWithCredentials } from 'components/common/UserAvatar';
import { SecondaryButton, SecondaryLinkButton } from 'ui/components/Button';

import { ChatIcon } from 'components/icons/ChatIcon';
import { usePathname } from 'next/navigation';
import { ColumnTemplate } from '../ColumnTemplate';

interface ICard {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

interface ParticipantCardProps {
  user: {
    avatarURL: string;
    name: string;
    email: string;
  };
  header: string;
  banButtonLabel: string;
  chatHref: string;
  className?: string;
  handleParticipantBan: () => void;
}

export const ParticipantCard: FC<ParticipantCardProps> = ({
  user,
  className,
  header,
  banButtonLabel,
  chatHref,
  handleParticipantBan,
}) => {
  const pathname = usePathname();

  return (
    <ColumnTemplate
      headerLabel={header}
      className={`${s.card} ${className ? className : ''}`.trim()}
    >
      <div className={s.card_wrapper}>
        <UserAvatarWithCredentials
          avatarURL={user.avatarURL}
          userName={user.name}
          userEmail={user.email}
          size={48}
        />
        <SecondaryButton
          className={s.card_button}
          onClick={handleParticipantBan}
        >
          {banButtonLabel}
        </SecondaryButton>
        <SecondaryLinkButton
          href={`${pathname}/chat/${chatHref}`}
          className={s.card_button}
        >
          <ChatIcon />
        </SecondaryLinkButton>
      </div>
    </ColumnTemplate>
  );
};
