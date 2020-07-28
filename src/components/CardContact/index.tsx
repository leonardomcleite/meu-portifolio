import { Avatar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { title } from 'process';
import React from 'react';
import { theme } from 'styles/theme/theme';

export interface CardContactProps {
  data?: any[]
}

const CardContact: React.FC<CardContactProps> = (props: CardContactProps) => {

  return (
    <div className="info">
      {props.data?.map((item, index) => (
        <div key={index} className="flex row v-center">
          <Avatar>
            <Icon style={{ fontSize: 20, color: theme.palette.primary.main }} className={item?.icon} />
          </Avatar>
          <div className='flex col v-center'>
            <h4>{item?.title}</h4>
            <p>{item?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContact;