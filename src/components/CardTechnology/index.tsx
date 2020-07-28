import { Card, CardContent, makeStyles, Typography, SvgIcon } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import { theme } from 'styles/theme/theme';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '25vh',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

export interface CardTechnologyProps {
  data: {
    img?: string,
    icon?: string;
    name: string;
    description: string;
  }
}

const CardTechnology: React.FC<CardTechnologyProps> = (props: CardTechnologyProps) => {

  const { icon, img, name, description } = props?.data;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography style={{ textAlign: 'center'}}>
          {icon ? <Icon style={{ fontSize: 50, color: theme.palette.secondary.main }} className={icon} /> :
            <img src={img} style={{height: 50, width: 50}}/>}
        </Typography>
        <Typography variant='h2' component='h2'>
          {name}
        </Typography>
        <Typography variant='body1' align='center'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardTechnology;