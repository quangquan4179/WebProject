import Pusher from 'pusher-js';
import React from 'react';
Pusher.logToConsole = true;

export const  pusher = new Pusher("2d56f7896a4df75110d7", {cluster: "ap1",});
export const PusherContext = React.createContext(pusher);


