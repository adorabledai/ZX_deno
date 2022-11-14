import React, { useContext } from 'react';
import { alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FilterPopup from './FilterPopup';
export default function EnhancedTableToolbar(props) {
    const { numSelected, removeHandler } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                    Nutrition
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton
                        onClick={(event) => {
                            event.preventDefault();
                            removeHandler();
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <FilterPopup />
            )}
        </Toolbar>
    );
}