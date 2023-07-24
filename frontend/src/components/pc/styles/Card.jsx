import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

const  GameCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="http://localhost:8000/images/hero1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            カタン
          </Typography>
          <Typography variant="h6">
           運と駆け引きで、発展させよ！！
          </Typography>
          <Typography variant="body2" color="text.secondary">
            対象年齢:1~10
          </Typography>
          <Typography variant="body2" color="text.secondary">
           プレイ人数:2~5人
          </Typography>
          <Typography variant="body2" color="text.secondary">
            プレイ時間: 30分
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const  BlogCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="http://localhost:8000/images/hero1.jpg"
                    alt="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            2023/07/12 ボードゲーム会
                         </Typography>
                        <Typography variant="body2">
                            今日は大阪でボードゲームイベントがありました！
                            とても楽しかったです。
                            今日行ったボードゲームは...
                        </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const EventCard = () => {
    // const { imageUrl, date, time, location, fee, detailsLink } = props;
  
    return (
      <Card sx={{ display: 'flex', marginBottom: '24px' }}>
        <CardMedia
          component="img"
          sx={{ width: 300, objectFit: 'cover' }}
          image="http://localhost:8000/images/hero1.jpg"
          alt="Event"
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            イベント名
          </Typography>
          <Typography variant="h6">
            開催日時：2023/07/08
          </Typography>
          <Typography variant="h6">
            開催時間：10~15
          </Typography>
          <Typography variant="h6">
            開催場所：大阪
          </Typography>
          <Typography variant="h6">
            参加料金：1H1500
          </Typography>
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h6">
                予定ボードゲーム
            </Typography>
            <Typography variant="body2">
                カタン
            </Typography>
            <Typography variant="body2">
                なんじゃもんじゃ
            </Typography>
            <Typography variant="body2">
                タイムボム
            </Typography>
            <Typography variant="body2">
                コードネーム
            </Typography>
            <Button variant="outlined" href={"/"} target="_blank" sx={{ mb: 1 }}>
                詳細はこちら
            </Button>
        </CardContent>
      </Card>
    );
};

export { GameCard, BlogCard, EventCard };