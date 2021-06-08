import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD5+fnGxsbs7OyioqKzs7Pw8PD29vbBwcHp6enX19eEhIT8/Px3d3efn5/Ozs4+Pj69vb0wMDCurq44ODh4eHjh4eEqKiqNjY1hYWFpaWkjIyNxcXFdXV0rKytFRUUTExNVVVVMTEwRERGTk5OBgYEaGhr2fp31AAAH00lEQVR4nO2d61YiOxCFBeQuooCgiE6jgu//hucgwxovUKna2VVhZvX+T6c/ujupW1IXF7Vq1apVq1atWrVq1ar1l6g5bE3GD9v5srrdqVrOtw/jSWvRLH1jBA3648eqcVrV47g/KH2TqLr9zYvA9lnPm3639O0a1ZvMfynpDppu+73St63VYnxrpDuoav8Fb+xgPAXx9rprX5ZGkNSc3WXh/X6SnVFpkBMaXhPw9toOS8McUSfv7fyu20lpoG9qv1H5dnqflYb6pDEd70Prc2Fs+/B96BwYO2tHwEZj1S/MN1y58u10tyjI13xy59tpWwzQ8wP8qk4RvgFqfSJ6KeB7xD3AvaIfY/c1GLDRWIZGBFrhfDsFGqtXRQAbjXYQXzP+DT3oMQRwUYzvf90H+MdlPsE/cv8YndwIg5wdx1JzzGeNPQGXpek+dOUHqI3weuvaC7DcKvFdT/86oBPiubyie835gM+lmb6JPt3wor0skReNh9I8R0T1GGelaY7qhgd4U5rlhGi5uMvSJKf0RkpSjfxjoqheOIT+68T7ajqdrtbALx8YgI5BtV/X7f6i2zy8a71u93LY72zmy3f1JVr5gEMnuvftjfQV9Yb98VyTkswOpI74icGdrlSuumaRqnIJHx3wVtqcmeoDybRtJg6AeltENwVk5aZ6fD6LxawjnOYQ8qMWJktLOY1vcEB65PDVlnvQLlS49caeR60+nZbwFQVku0zmt0ltbIAx1EFpQIM5hRGSpxkgeKQnhCYbslNYAbdgMIkR441RZph5CwZCIPbW5wJCc4HFrbGvGNxSw2cE0ERoTp6SDVJsTTa5plbz9J4KCIZvTYTGh0i218AqfFt4wZYAl3aB2IUWptkITaOQqxFQD84YIrLEFrk1hxUIaCU0lNuSHV+40NdIaHCFyQFEeLeP9T70lSjcpeIWBTQTqvP75BApHmQwp7y0c82cS6gNzQzb89dVXlhBG8YjkR2k+gwXW8ZQykwN2Z7RzHA9lrets2vIBfgK35734esWJtpwe6UnGmI0QRV1Y6e0k74vNcWsmU3Z5YfJqZRq5WtiCVznPm12c31tRbyGXpaQCkFxI16rNGGHOmAjGaxll42n4yX08q7EeOyy6rRZQx4wSchO4CWtb351UGLANXm4dYqQHAhuJAnp46Vmtg19RHm8Jn281PrLrwSOJkzVZvDLZ6IJE5Fhh+KLaMI7eUCHStJowoTx7VAMHE4oWzUO9dzhhHK5okMZWzih7OezXadGAUK5qpY/XjyhGBhyWCziCStpPHaR0E7hhO/SeB67mMMJxRE9to7EE0pLvkdJcDyh5D/RgzSNEoSSUeOxg+u8CD12j8QTShHaf+MZSsnu+O/Qw8aQjgfLmEt7l8eVsUcQdQOk3EUGIQ5yUuiuQIkwI5boQIjeiuQgZiS4+YCwCSnFEzOsNj4h/HdLhBmWN58QztlI62GG98QnhMt6pOm7e06E8Jl+kuWdYWHwCdforYgB0zMixN8n8bJ4rI1OCM/rclgfj5fSCWEbWU7N4MU0dEI4/C5vfcDrBuiEcIJfPl0RN9vohHAmU85b4Es+nRC+E9lfG50NIW5AJi4M12CxCeHvJVU4Dy8XbEJ4zktV7MLRNjYhXH2WKhOGC5LZhHDVaWpbCWx7swnhxSJZJWzt8eNECNvdiWKTC9xuIxPCdnf65Cg03EYmhO3u9MFRaBCaTAjb3YodOmDwgEyI2t2V4tpg/SWZEJ1KNadGgSviTeu4El1URrPOUYGAui3H6MVPSB6MnV3TALK3H4YS6naskwsyQgmVuzm5dcKRhGKx0Cdx93ZFEmqPwuTudI4kVB/eQN2tHkiYtroPohadBBLqD2+gFkgEEhpO9GNudo4jtBzfwpxr4ghNh8QQ+yCEEdpO2yKeOhBGaDyinbdgRBHql4q9eBVuUYTmZpe0hxhEaH2ExILoIELg6HLWafoxhPZHyJtOYwihXhekDbMhhEsEkLWBJoQQPF2fE7CJIESbQHBGDxhDG7z4KcqKEUCY0eSCMdn4E2LTzF6MUzL8CeFTC3cibDFxJ8xsapnfRsebMLeNXn7Ixpswu+dTdozfmZDQWzb3EAJfQkoHvczz1FwJOU27Mgr4vQnfSP3W83Z4exLSmudlBW0cCQktyQ7KmW38CKl9OjPOPHEjRE96PyE8CO5FaG73kBJa0edFSGru+Ek9NPbmQ1jRAXFEF0L8FHQRUd9Z0pswq5mchAh9iw6EFamH7E+NkL0KfEKsLY9SwKJBJ3TpHP9H9gw/mzCj26FO5p0eZEJqv/HjshaCcwkJLn1aC9uqwSS8ze7+q5QpACdfykRItrUlWT5G+UoWQnOmPkfDdThhFfWG/tZI7THK11ETui8SP6WdU+WrKAnvsho3oxrptgjKF9ERUuMVFg01RTfyJTSEL7aueFwpclPyBdKEb8SIGqJesuxd/n2SsMAM812XCWNc/nWC8Cor+0nTQtxoJv9WJJyX/AC/aiE8R/mXAuFD8BKf0OBkVzH5d6cI79tukQpYo9nxtUP+1XHCZ6hMLUDDY1VU8k+OEN6Pz+v1/KrR5IdnJf/gB+FViI+bpdHkESWcPpw/3l6j4WZqJlzOaPnOGHVbm1ct4f3TrIjvQNCiv0nkiJpPs5vzsFtq1apVq1atWrVq1apVS9J/5PWM2X/kZlsAAAAASUVORK5CYII="/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option active_header_option">
                    <HomeIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <FlagIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon font-size="large"/>  
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon font-size="large"/>  
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationImportantIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
