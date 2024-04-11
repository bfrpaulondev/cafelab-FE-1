import React from 'react';
import {
    AbsoluteCenter,
    Avatar,
    Box,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    HStack,
    Icon,
    IconButton,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack
} from '@chakra-ui/react';

import {useNavigate} from 'react-router-dom';

import {FiBell, FiChevronDown, FiHome, FiLogIn, FiMenu, FiSettings, FiUsers, FiCalendar, FiPackage} from 'react-icons/fi';

import {MdAutoGraph, MdCoffee} from 'react-icons/md';
import {GrContact} from 'react-icons/gr';
import {useAuth} from "../context/AuthContext.jsx";
import Footer from "./Footer.jsx";
import {FaShoppingCart} from "react-icons/all.js";

const LinkItems = [
    {name: 'Home', route: '/home', icon: FiHome},
    {name: 'Subscrição', route: '/subscricao', icon: FiPackage},
    {name: 'Boutique', route: '/boutique', icon: MdCoffee},
    {name: 'Agenda', route: '/events', icon: FiCalendar},
    //{name: 'Customers', route: '/dashboard/customers', icon: FiUsers},
    {name: 'Contacts', route: '/contacts', icon: GrContact},
    //{name: 'Dashboard', route: '/dashboard', icon: MdAutoGraph},
    {name: 'Settings', route: '/dashboard/settings', icon: FiSettings},
];

export default function SidebarWithHeader({children}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Flex minH="100vh" bg={useColorModeValue('white', 'gray.900')}  direction="column">
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}>
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen}/>
            <Box gap={4}>
                {children}
                <Footer>
                </Footer>
            </Box>
        </Flex>

    );
}

const SidebarContent = ({onClose}) => {
    const navigate = useNavigate();
    return (
        <Flex h="20" flexDirection="column" alignItems="center" mx="8" mb={75} mt={10} justifyContent="space-between">
            <CloseButton mb={4} onClick={onClose}/>
            <Image
                borderRadius='full'
                boxSize='75px'
                src='./src/assets/CafeLabLogo.png'
                alt='CAfeLab'
                onClick={() => navigate('/home')}
            />
            <Text className={"cafelab"} mb={10} fontSize="3xl">
                CAFELAB
            </Text>
            {LinkItems.map((link) => (
                <NavItem key={link.name} route={link.route} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Flex>
    );
};

const NavItem = ({icon, route, children, ...rest}) => {
    return (
        <Link href={route} style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'blue.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({onOpen, ...rest}) => {
    const {logOut, customer} = useAuth()
    const navigate = useNavigate();
    return (
        <Flex
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{base: 'space-between', md: 'space-between'}}
            {...rest}>

            <IconButton
                ml={{base: 4, md: 60}}
                onClick={onOpen}
                variant="ghost"
                aria-label="open menu"
                icon={<FiMenu/>}
            />
            <AbsoluteCenter axis='horizontal'>
                <Image
                    boxSize='40px'
                    margin='auto'
                    src='src/assets/logo.png'
                    alt='CafeLab'
                    onClick={() => navigate('/home')}
                />
            </AbsoluteCenter>
            {customer ?
                <HStack spacing={{base: '0', md: '6'}} mr={{base: 4, md: 60}}>
                    <IconButton
                        size="lg"
                        variant="ghost"
                        aria-label="open menu"
                        icon={<FiBell/>}
                    />
                    <Flex alignItems={'center'}
                    >
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{boxShadow: 'none'}}>
                                <HStack>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                    <VStack
                                        display={{base: 'none', md: 'flex'}}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                    </VStack>
                                    <Box display={{base: 'none', md: 'flex'}}>
                                        <FiChevronDown/>
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue('white', 'gray.900')}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem>Billing</MenuItem>
                                <MenuDivider/>
                                <MenuItem onClick={logOut}>
                                    Sign out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack> :
                <IconButton
                    mr={{base: 4, md: 60}}
                    size="lg"
                    variant="ghost"
                    aria-label="log in"
                    icon={<FaShoppingCart/>}
                    onClick={() => navigate('/cart')}
                />
            }

        </Flex>
    );
};