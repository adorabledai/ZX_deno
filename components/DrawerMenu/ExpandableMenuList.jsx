import React, { useState, useEffect } from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { useRouter } from 'next/router'
export default function NestedList({ open }) {
    const route = useRouter()
    const [expand, setExpand] = useState(false)
    useEffect(() => {
        setExpand(open)
    }, [open])
    const handleClick = () => {
        open && setExpand(!expand)
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                open && (
                    <ListSubheader component="div" id="nested-list-subheader">
                        Sub Items
                    </ListSubheader>
                )
            }
        >
            <ListItemButton onClick={() => route.push('/rwd')}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="RWD Grid" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Setting Table" />
                {expand && open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => route.push('/setting-table')}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Editable Table" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    )
}
