import { IconButton, TextField } from "@mui/material";
import React from "react";
import { Container, Title } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

function SearchForm({ setSearchValue }) {
	const handleChange = (e) => {
		setSearchValue(e.target.value.toLowerCase());
	};

	return (
		<Container>
			<Title>Mi Stock</Title>

			<TextField
				id="outlined-basic"
				label="Buscar"
				variant="outlined"
				onChange={handleChange}
				InputProps={{
					endAdornment: (
						<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
							<SearchIcon />
						</IconButton>
					),
				}}
			/>
		</Container>
	);
}

export default SearchForm;
