export class Musicas {
  id!: string;
  title!: string;
  imgUrl!: string | undefined;
  links!: Link;
  foto!: Foto;
}
export class Link {
    appleUrl!: string;
    deezerUrl!: string;
    spotifyUrl!: string;
    tidalUrl!: string;
    youtubeUrl!: string;
}

export class Foto {
  appleImgUrl!: string;
  deezerImgUrl!: string;
  spotifyImgUrl!: string;
  tidalImgUrl!: string;
  youtubeImgUrl!: string;
}
