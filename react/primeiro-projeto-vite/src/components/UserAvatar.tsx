type Props = {
  src: string
}

export const UserAvatar = ({src}: Props) => {
  return (
    <img src={src} alt="Um Avatar Qualquer" onClick={() => alert('Clicou!')} />
  );
};
