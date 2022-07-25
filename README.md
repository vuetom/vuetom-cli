# vuetom-cli

<h1 align="center">
	<br>
	<img width="320" src="media/vuetom-logo-m.png" alt="vuetom-cli">
	<br>
</h1>

> Blog & Documents generation tool

Version: 0.2.x

[CHANGELOG](./CHANGELOG.md)

## Links

[npm](https://www.npmjs.com/package/vuetom-cli)

[github](https://github.com/lauset/vuetom-cli)

## Install

**npm**

```bash
npm install vuetom-cli -g

# options: show version
vuetom-cli -v

# options: show help information
vuetom-cli --help
```

**yarn**

```bash
yarn global add vuetom-cli
```

## Usage

**Options**

`-v, --vers`: View the current version number

`-h, --help`: View the current help

**Commands**

`init`: Initialize a project with a vuetom theme

`list`: Show the latest information about the vuetom cli branch

`git`: Show the list of GIT warehouses of a user

`ver`: Show theme or templates local version number

`help`: Same as -h option

**eg.**

```bash
# Create docs templates
vuetom-cli init

# See the latest submission
vuetom-cli list
vuetom-cli list temp-docs

# Show someone's repo
vuetom-cli git lauset
vuetom-cli git lauset gitee

# Show local template version
vuetom-cli ver
vuetom-cli ver -t docs
```

## development

```bash
# install 
pnpm install

# Compiling TS files
pnpm build

# Test Cli (dev)
pnpm ts
pnpm ts:init
pnpm ts:list

# Test Cli (prod)
pnpm cli
pnpm cli:init
pnpm cli:list

# check dependencies updates
ncu

# update all dependencies
ncu -u
```
## showtime

`% vuetom-cli`

![vc01](./media/vc01.png)

`% vuetom-cli list`

![vc02](./media/vc02.png)

`% vuetom-cli git vuejs`

![vc03](./media/vc03.png)

`% vuetom-cli init`

![vc04](./media/vc04.png)

![vc05](./media/vc05.png)
