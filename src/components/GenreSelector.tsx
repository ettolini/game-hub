import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGenres, { Genre } from '../hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error } = useGenres();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || 'Genres'}
      </MenuButton>
      <MenuList>
        {data.map((genre) => (
          <MenuItem onClick={() => onSelectGenre(genre)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
