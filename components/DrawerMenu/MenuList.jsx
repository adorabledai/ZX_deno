import React from 'react'
import config from '../../router.config'
import { useRouter } from 'next/router'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
export default function MenuList({ open }) {
    const route = useRouter()
    return (
        <List>
            {config.map((item, index) => (
                <ListItem
                    key={index}
                    disablePadding
                    sx={{ display: 'block' }}
                    onClick={() => route.push(item.path)}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
