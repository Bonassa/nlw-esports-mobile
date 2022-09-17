## Criação do projeto
``` bash
  expo init nomeDaAplicação
  blank (TypeScript)
```

## Execução do projeto
``` bash
  expo start
```

## Instalação de bibliotecas com Expo
Sempre pare de rodar a aplicação quando for instalar com o expo, pois ele faz isso de modo nativo

### Google Fonts - (https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font)
``` bash
  expo install expo-font @expo-google-fonts/inter
```

### Linear Gradient
Posibilita utilizar gradientes
``` bash
  expo install expo-linear-gradient
```

### React Navigation - (https://reactnavigation.org/)
Navegação entre páginas
``` Instalação do core
  npm install @react-navigation/native
```

Após instalar as dependências, instalamos a estratégia de navegação que iremos utilizar
``` Instalação do Stack Navigation
  yarn add @react-navigation/native-stack
```

#### Dependências
##### Safe area context
Biblioteca para garantir safe areas dos dispositivos
``` bash
  expo install react-native-safe-area-context
```

##### React Native Screens
``` bash
  expo install react-native-screens
```

### Icones
#### Phosphor Icons - React Native (https://github.com/duongdev/phosphor-react-native)

``` bash
  yarn add phosphor-react-native

  expo install react-native-svg
```

#### Expo Vector Icons (https://docs.expo.dev/guides/icons/)


## Axios para fetch da api do backend

## Copiar para área de transferência - Expo Clipboard (https://docs.expo.dev/versions/latest/sdk/clipboard/)
## Notificações (https://docs.expo.dev/versions/latest/sdk/notifications/)
precisa do expo-modules-core

``` bash
  expo install expo-modules-core
```

https://docs.expo.dev/push-notifications/sending-notifications/