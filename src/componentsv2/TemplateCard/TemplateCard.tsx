import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';

interface Props {
    name: string;
    description: string;
    title: string;
    path: string;
}

function TemplateCard(props: Props) {
    return (
        <Card sx={{ width: 345, height: 300 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TemplateCard;
