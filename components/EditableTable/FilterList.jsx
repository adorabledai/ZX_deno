import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { headCells } from './mock_data';
import { FilterContext } from '../../contexts/filter.context.js';
export default function CheckboxList() {
    const { setList } = useContext(FilterContext);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {headCells.map((value) => {
                const labelId = `checkbox-list-label-${value.id}`;

                return (
                    <ListItem key={value.id} disablePadding>
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox
                                    defaultChecked={true}
                                    edge="start"
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    onChange={(event) => {
                                        if (!event.target.checked) {
                                            setList((prev) => {
                                                const newValue = prev.filter(
                                                    (data) => data.id !== event.target.value
                                                );
                                                return newValue;
                                            });
                                        } else if (event.target.checked) {
                                            const checkedColumn = headCells.find(
                                                (ele) => ele.id === event.target.value
                                            );
                                            setList((prev) =>
                                                [...prev, checkedColumn].sort(
                                                    (a, b) => a.key - b.key
                                                )
                                            );
                                        }
                                    }}
                                    value={value.id}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.label}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
