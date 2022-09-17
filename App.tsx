
import { useRef, useEffect } from "react";
import { StatusBar } from "react-native";
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";

import { Routes } from "./src/routes";

import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';

import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';


export default function App() {
  const [fontLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const getNotificationListner = useRef<Subscription>();
  const responseNotificationListner = useRef<Subscription>(); //Para responder a uma notificação indo direto para o app
  
  useEffect(() => {
    getPushNotificationToken();
  })

  useEffect(() => {
    getNotificationListner.current = Notifications.addNotificationReceivedListener(notification => console.log(notification));
    responseNotificationListner.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response));

    return () => {
      if( getNotificationListner.current && responseNotificationListner.current ){
        Notifications.removeNotificationSubscription(getNotificationListner.current);
        Notifications.removeNotificationSubscription(responseNotificationListner.current);
      }
    }
  }, [])
  
  return (
    <Background>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      
      { fontLoader ? <Routes /> : <Loading /> }
    </Background>
  );
}
